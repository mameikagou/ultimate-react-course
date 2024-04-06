const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

// 封装函数
export const costomerReducer = (state = initialStateCustomer, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
};

export const createCustomer = (fullName, nationalID) => {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toString() },
  };
};

export const updateName = (fullName) => {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
};
