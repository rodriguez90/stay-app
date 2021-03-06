/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";


export const Login: msRest.CompositeMapper = {
  serializedName: "Login",
  type: {
    name: "Composite",
    className: "Login",
    modelProperties: {
      username: {
        serializedName: "username",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      },
      password: {
        required: true,
        serializedName: "password",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PasswordChange: msRest.CompositeMapper = {
  serializedName: "PasswordChange",
  type: {
    name: "Composite",
    className: "PasswordChange",
    modelProperties: {
      newPassword1: {
        required: true,
        serializedName: "new_password1",
        constraints: {
          MaxLength: 128,
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      newPassword2: {
        required: true,
        serializedName: "new_password2",
        constraints: {
          MaxLength: 128,
          MinLength: 1
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PasswordReset: msRest.CompositeMapper = {
  serializedName: "PasswordReset",
  type: {
    name: "Composite",
    className: "PasswordReset",
    modelProperties: {
      email: {
        required: true,
        serializedName: "email",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PasswordResetConfirm: msRest.CompositeMapper = {
  serializedName: "PasswordResetConfirm",
  type: {
    name: "Composite",
    className: "PasswordResetConfirm",
    modelProperties: {
      newPassword1: {
        required: true,
        serializedName: "new_password1",
        constraints: {
          MaxLength: 128,
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      newPassword2: {
        required: true,
        serializedName: "new_password2",
        constraints: {
          MaxLength: 128,
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      uid: {
        required: true,
        serializedName: "uid",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      token: {
        required: true,
        serializedName: "token",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UserDetails: msRest.CompositeMapper = {
  serializedName: "UserDetails",
  type: {
    name: "Composite",
    className: "UserDetails",
    modelProperties: {
      pk: {
        readOnly: true,
        serializedName: "pk",
        type: {
          name: "Number"
        }
      },
      username: {
        required: true,
        serializedName: "username",
        constraints: {
          MaxLength: 150,
          MinLength: 1,
          Pattern: /^[\w.@+-]+$/
        },
        type: {
          name: "String"
        }
      },
      email: {
        readOnly: true,
        serializedName: "email",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      firstName: {
        serializedName: "first_name",
        constraints: {
          MaxLength: 30
        },
        type: {
          name: "String"
        }
      },
      lastName: {
        serializedName: "last_name",
        constraints: {
          MaxLength: 150
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const JSONWebToken: msRest.CompositeMapper = {
  serializedName: "JSONWebToken",
  type: {
    name: "Composite",
    className: "JSONWebToken",
    modelProperties: {
      username: {
        required: true,
        serializedName: "username",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      password: {
        required: true,
        serializedName: "password",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RefreshJSONWebToken: msRest.CompositeMapper = {
  serializedName: "RefreshJSONWebToken",
  type: {
    name: "Composite",
    className: "RefreshJSONWebToken",
    modelProperties: {
      token: {
        required: true,
        serializedName: "token",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VerifyJSONWebToken: msRest.CompositeMapper = {
  serializedName: "VerifyJSONWebToken",
  type: {
    name: "Composite",
    className: "VerifyJSONWebToken",
    modelProperties: {
      token: {
        required: true,
        serializedName: "token",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const User: msRest.CompositeMapper = {
  serializedName: "User",
  type: {
    name: "Composite",
    className: "User",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      email: {
        required: true,
        serializedName: "email",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      username: {
        required: true,
        serializedName: "username",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      password: {
        required: true,
        serializedName: "password",
        constraints: {
          MinLength: 8
        },
        type: {
          name: "String"
        }
      },
      lastLogin: {
        nullable: true,
        serializedName: "last_login",
        type: {
          name: "DateTime"
        }
      },
      isSuperuser: {
        serializedName: "is_superuser",
        type: {
          name: "Boolean"
        }
      },
      firstName: {
        serializedName: "first_name",
        constraints: {
          MaxLength: 30
        },
        type: {
          name: "String"
        }
      },
      lastName: {
        serializedName: "last_name",
        constraints: {
          MaxLength: 150
        },
        type: {
          name: "String"
        }
      },
      isStaff: {
        serializedName: "is_staff",
        type: {
          name: "Boolean"
        }
      },
      isActive: {
        serializedName: "is_active",
        type: {
          name: "Boolean"
        }
      },
      dateJoined: {
        serializedName: "date_joined",
        type: {
          name: "DateTime"
        }
      },
      groups: {
        serializedName: "groups",
        constraints: {
          UniqueItems: true
        },
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      userPermissions: {
        serializedName: "user_permissions",
        constraints: {
          UniqueItems: true
        },
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const Person: msRest.CompositeMapper = {
  serializedName: "Person",
  type: {
    name: "Composite",
    className: "Person",
    modelProperties: {
      secondName: {
        nullable: true,
        serializedName: "second_name",
        constraints: {
          MaxLength: 255
        },
        type: {
          name: "String"
        }
      },
      secondLastName: {
        nullable: true,
        serializedName: "second_last_name",
        constraints: {
          MaxLength: 255
        },
        type: {
          name: "String"
        }
      },
      identification: {
        nullable: true,
        serializedName: "identification",
        constraints: {
          MaxLength: 255
        },
        type: {
          name: "String"
        }
      },
      phoneNumber: {
        nullable: true,
        serializedName: "phone_number",
        constraints: {
          MaxLength: 255
        },
        type: {
          name: "String"
        }
      },
      address: {
        nullable: true,
        serializedName: "address",
        type: {
          name: "String"
        }
      },
      isActive: {
        serializedName: "is_active",
        type: {
          name: "Boolean"
        }
      },
      createdAt: {
        readOnly: true,
        serializedName: "created_at",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        readOnly: true,
        serializedName: "updated_at",
        type: {
          name: "DateTime"
        }
      },
      user: {
        required: true,
        serializedName: "user",
        type: {
          name: "Composite",
          className: "User"
        }
      }
    }
  }
};

export const Rent: msRest.CompositeMapper = {
  serializedName: "Rent",
  type: {
    name: "Composite",
    className: "Rent",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        required: true,
        serializedName: "name",
        constraints: {
          MaxLength: 255,
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      description: {
        required: true,
        serializedName: "description",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      isActive: {
        serializedName: "is_active",
        type: {
          name: "Boolean"
        }
      },
      price: {
        required: true,
        serializedName: "price",
        type: {
          name: "Number"
        }
      },
      phone: {
        required: true,
        serializedName: "phone",
        constraints: {
          MaxLength: 255,
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      email: {
        required: true,
        serializedName: "email",
        constraints: {
          MaxLength: 255,
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      adress: {
        required: true,
        serializedName: "adress",
        constraints: {
          MaxLength: 255,
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      image: {
        readOnly: true,
        serializedName: "image",
        type: {
          name: "String"
        }
      },
      createdAt: {
        readOnly: true,
        serializedName: "created_at",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        readOnly: true,
        serializedName: "updated_at",
        type: {
          name: "DateTime"
        }
      },
      user: {
        nullable: true,
        serializedName: "user",
        type: {
          name: "Number"
        }
      },
      services: {
        readOnly: true,
        serializedName: "services",
        constraints: {
          UniqueItems: true
        },
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const FileListSerialize: msRest.CompositeMapper = {
  serializedName: "FileListSerialize",
  type: {
    name: "Composite",
    className: "FileListSerialize",
    modelProperties: {
      images: {
        required: true,
        serializedName: "images",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Service: msRest.CompositeMapper = {
  serializedName: "Service",
  type: {
    name: "Composite",
    className: "Service",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        required: true,
        serializedName: "name",
        constraints: {
          MaxLength: 255,
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      cssIcon: {
        required: true,
        serializedName: "css_icon",
        constraints: {
          MaxLength: 255,
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      createdAt: {
        readOnly: true,
        serializedName: "created_at",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        readOnly: true,
        serializedName: "updated_at",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const RentCreate: msRest.CompositeMapper = {
  serializedName: "RentCreate",
  type: {
    name: "Composite",
    className: "RentCreate",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        required: true,
        serializedName: "name",
        constraints: {
          MaxLength: 255,
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      description: {
        required: true,
        serializedName: "description",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      isActive: {
        serializedName: "is_active",
        type: {
          name: "Boolean"
        }
      },
      user: {
        nullable: true,
        serializedName: "user",
        type: {
          name: "Number"
        }
      },
      price: {
        required: true,
        serializedName: "price",
        type: {
          name: "Number"
        }
      },
      phone: {
        required: true,
        serializedName: "phone",
        constraints: {
          MaxLength: 255,
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      email: {
        required: true,
        serializedName: "email",
        constraints: {
          MaxLength: 255,
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      adress: {
        required: true,
        serializedName: "adress",
        constraints: {
          MaxLength: 255,
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      image: {
        readOnly: true,
        serializedName: "image",
        type: {
          name: "String"
        }
      },
      images: {
        required: true,
        serializedName: "images",
        type: {
          name: "Composite",
          className: "FileListSerialize"
        }
      },
      createdAt: {
        readOnly: true,
        serializedName: "created_at",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        readOnly: true,
        serializedName: "updated_at",
        type: {
          name: "DateTime"
        }
      },
      services: {
        required: true,
        serializedName: "services",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Service"
            }
          }
        }
      }
    }
  }
};

export const UserList: msRest.CompositeMapper = {
  serializedName: "UserList",
  type: {
    name: "Composite",
    className: "UserList",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      password: {
        required: true,
        serializedName: "password",
        constraints: {
          MaxLength: 128,
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      lastLogin: {
        nullable: true,
        serializedName: "last_login",
        type: {
          name: "DateTime"
        }
      },
      isSuperuser: {
        serializedName: "is_superuser",
        type: {
          name: "Boolean"
        }
      },
      username: {
        required: true,
        serializedName: "username",
        constraints: {
          MaxLength: 150,
          MinLength: 1,
          Pattern: /^[\w.@+-]+$/
        },
        type: {
          name: "String"
        }
      },
      firstName: {
        serializedName: "first_name",
        constraints: {
          MaxLength: 30
        },
        type: {
          name: "String"
        }
      },
      lastName: {
        serializedName: "last_name",
        constraints: {
          MaxLength: 150
        },
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        constraints: {
          MaxLength: 254
        },
        type: {
          name: "String"
        }
      },
      isStaff: {
        serializedName: "is_staff",
        type: {
          name: "Boolean"
        }
      },
      isActive: {
        serializedName: "is_active",
        type: {
          name: "Boolean"
        }
      },
      dateJoined: {
        serializedName: "date_joined",
        type: {
          name: "DateTime"
        }
      },
      groups: {
        serializedName: "groups",
        constraints: {
          UniqueItems: true
        },
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      userPermissions: {
        serializedName: "user_permissions",
        constraints: {
          UniqueItems: true
        },
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};
