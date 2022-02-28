module.exports = {
  schema: {
    title: "A customizable registration form",
    description: "A simple form with pattern properties example.",
    type: "object",
    required: ["firstName", "lastName"],
    patternProperties: {
      "^str_": {
        type: "string",
      },
      "^num_": {
        type: "number",
      },
    },
    properties: {
      firstName: {
        type: "string",
        title: "First name",
      },
      lastName: {
        type: "string",
        title: "Last name",
      },
    },
  },
  uiSchema: {
    firstName: {
      "ui:autofocus": true,
      "ui:emptyValue": "",
    },
  },
  formData: {
    firstName: "Chuck",
    lastName: "Norris",
    str_assKickCount: "infinity",
    num_assKickedCount: 0,
  },
};
