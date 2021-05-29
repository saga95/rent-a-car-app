import { AmplifySignOut } from "@aws-amplify/ui-react";
import { SignIn } from "../../Auth";
import config from "../../../aws-exports";
import { Button, Checkbox, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import { v4 } from "uuid";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { createVehicle } from "../../../graphql/mutations";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

export default function Admin() {
  const [isRentable, setRentable] = useState(false);
  const [imagesArray, setImagesArray] = useState();
  const [form] = Form.useForm();

  const onFinish = async ({
    vehicleDescription,
    vehicleName,
    vehicleManufacuturer,
    vehicleModal,
    vehicleRegNumber,
    vehiclecost,
  }) => {
    const imageName = imagesArray[0].name;
    const key = `images/${v4()}${imageName}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;

    const vehicleId = v4();
    const input = {
      id: vehicleId,
      manufacturer: vehicleManufacuturer,
      modal: vehicleModal,
      regNumber: vehicleRegNumber,
      cost: vehiclecost,
      rentable: isRentable,
      image: url,
      description: vehicleDescription,
      vehicleId: vehicleId,
    };
    console.log(input);

    try {
      await Storage.put(key, imageName, {
        level: "public",
        contentType: imageName.type,
      });
    } catch (err) {
      console.log(err);
    }

    try {
      await API.graphql(graphqlOperation(createVehicle, { input: input }));
      console.log("success");
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    if (e.target.checked) {
      setRentable(e.target.checked);
    } else setRentable(false);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    setImagesArray(e.fileList);

    return e && e.fileList;
  };
  return (
    <div>
      <SignIn signOut={false}></SignIn>
      <div>Admin Area</div>
      <Form form={form} name="addVahicle" onFinish={onFinish}>
        <Form.Item
          name="vehicleName"
          label="Vehcile Name"
          rules={[
            {
              required: true,
              message: "Please input vehcile name!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="vehicleManufacuturer"
          label="Vehcile Manufacuturer"
          rules={[
            {
              required: true,
              message: "Please input manufacturer!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="vehicleModal"
          label="Vehcile Modal"
          rules={[
            {
              required: true,
              message: "Please input modal!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="vehicleRegNumber"
          label="Vehcile Register Number"
          rules={[
            {
              required: true,
              message: "Please input register number!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="vehiclecost"
          label="Vehcile cost"
          rules={[
            {
              required: true,
              message: "Please input cost!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="vehicleDescription"
          label="Vehcile description"
          rules={[
            {
              required: true,
              message: "Please input description!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="isRentable" label="Available for rent">
          <Checkbox onChange={onChange} />
        </Form.Item>
        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            name="vehicleImage"
            listType="picture-card"
            className="upload-list-inline"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Add new vehicle</Button>
        </Form.Item>
      </Form>
      <AmplifySignOut></AmplifySignOut>
    </div>
  );
}
