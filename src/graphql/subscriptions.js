/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      email
      firstName
      lastName
      birthday
      orders {
        items {
          id
          userId
          vehicleId
          total
          orderId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      email
      firstName
      lastName
      birthday
      orders {
        items {
          id
          userId
          vehicleId
          total
          orderId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      email
      firstName
      lastName
      birthday
      orders {
        items {
          id
          userId
          vehicleId
          total
          orderId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      userId
      vehicleId
      total
      orderId
      user {
        id
        email
        firstName
        lastName
        birthday
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      userId
      vehicleId
      total
      orderId
      user {
        id
        email
        firstName
        lastName
        birthday
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      userId
      vehicleId
      total
      orderId
      user {
        id
        email
        firstName
        lastName
        birthday
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateVehicle = /* GraphQL */ `
  subscription OnCreateVehicle {
    onCreateVehicle {
      id
      manufacturer
      modal
      regNumber
      cost
      rentable
      image
      description
      vehicleId
      orders {
        items {
          id
          userId
          vehicleId
          total
          orderId
          createdAt
          updatedAt
        }
        nextToken
      }
      vehicle {
        id
        email
        firstName
        lastName
        birthday
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVehicle = /* GraphQL */ `
  subscription OnUpdateVehicle {
    onUpdateVehicle {
      id
      manufacturer
      modal
      regNumber
      cost
      rentable
      image
      description
      vehicleId
      orders {
        items {
          id
          userId
          vehicleId
          total
          orderId
          createdAt
          updatedAt
        }
        nextToken
      }
      vehicle {
        id
        email
        firstName
        lastName
        birthday
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVehicle = /* GraphQL */ `
  subscription OnDeleteVehicle {
    onDeleteVehicle {
      id
      manufacturer
      modal
      regNumber
      cost
      rentable
      image
      description
      vehicleId
      orders {
        items {
          id
          userId
          vehicleId
          total
          orderId
          createdAt
          updatedAt
        }
        nextToken
      }
      vehicle {
        id
        email
        firstName
        lastName
        birthday
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
