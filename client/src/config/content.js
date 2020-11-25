// eslint-disable-next-line import/prefer-default-export
export const notifications = {
  signInRequired: "Please sign in.",
  genericError: "Something went wrong, please try again.",
};

export const getNotificationMessage = (id) => notifications[id];
