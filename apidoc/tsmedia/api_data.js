define({ "api": [
  {
    "type": "get",
    "url": "/auth",
    "title": "Login",
    "description": "<p>Logs an user in to receive an access token.</p>",
    "group": "Authentication",
    "name": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access token of the user's session.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token.value",
            "description": "<p>Value of the token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "access_token.expiry",
            "description": "<p>Expiration in milliseconds of the token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "session_hash",
            "description": "<p>Hash of the user's session.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "session_hash.value",
            "description": "<p>Hash value of the user's session.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "session_hash.expiry",
            "description": "<p>Expiry of the user's session in millis.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 200,\n        \"message\": \"OK\"\n    },\n    \"data\": {\n        \"access_token\": {\n            \"value\": \"3DoVTH2m76VakD7Q\",\n            \"expiry\": 1596475596000\n        },\n        \"session_hash\": {\n            \"value\": \"3DoVTH2m76VakD7Q\",\n            \"expiry\": 1596475596000\n        },\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "api/src/endpoints/v1/authEndpoint.php",
    "groupTitle": "Authentication",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "database_unavailable",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "missing_required_params",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_access_token",
            "description": "<p>No access token provided or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authentication_required",
            "description": "<p>Authorization is required to access endpoint.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authorization_header_required",
            "description": "<p>Authorization is required to access endpoint but no header was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_endpoint",
            "description": "<p>This endpoint does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_api_version",
            "description": "<p>The requested version does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unrecognized_action",
            "description": "<p>The action for an endpoint is not supported.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_permission",
            "description": "<p>Not enough permission to access endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "input_invalid:_[...]",
            "description": "<p>Input for that parameter is invalid or does not match the requirements</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 400,\n        \"message\": \"...\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/auth/refresh",
    "title": "Login with session",
    "description": "<p>Logs an user in using its session hash.</p>",
    "group": "Authentication",
    "name": "Login_with_session",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_hash",
            "description": "<p>User's session hash.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access token of the user's session.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token.value",
            "description": "<p>Value of the token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "access_token.expiry",
            "description": "<p>Expiration in milliseconds of the token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "session_hash",
            "description": "<p>Hash of the user's session.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "session_hash.value",
            "description": "<p>Hash value of the user's session.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "session_hash.expiry",
            "description": "<p>Expiry of the user's session in millis.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 200,\n        \"message\": \"OK\"\n    },\n    \"data\": {\n        \"access_token\": {\n            \"value\": \"3DoVTH2m76VakD7Q\",\n            \"expiry\": 1596475596000\n        },\n        \"session_hash\": {\n            \"value\": \"3DoVTH2m76VakD7Q\",\n            \"expiry\": 1596475596000\n        },\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "api/src/endpoints/v1/authEndpoint.php",
    "groupTitle": "Authentication",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "database_unavailable",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "missing_required_params",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_access_token",
            "description": "<p>No access token provided or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authentication_required",
            "description": "<p>Authorization is required to access endpoint.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authorization_header_required",
            "description": "<p>Authorization is required to access endpoint but no header was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_endpoint",
            "description": "<p>This endpoint does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_api_version",
            "description": "<p>The requested version does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unrecognized_action",
            "description": "<p>The action for an endpoint is not supported.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_permission",
            "description": "<p>Not enough permission to access endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "input_invalid:_[...]",
            "description": "<p>Input for that parameter is invalid or does not match the requirements</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 400,\n        \"message\": \"...\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/auth/refresh",
    "title": "Logout a session",
    "description": "<p>Logs an user out using its session hash.</p>",
    "group": "Authentication",
    "name": "Logout_a_session",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_hash",
            "description": "<p>User's session hash.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "api/src/endpoints/v1/authEndpoint.php",
    "groupTitle": "Authentication",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "database_unavailable",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "missing_required_params",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_access_token",
            "description": "<p>No access token provided or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authentication_required",
            "description": "<p>Authorization is required to access endpoint.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authorization_header_required",
            "description": "<p>Authorization is required to access endpoint but no header was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_endpoint",
            "description": "<p>This endpoint does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_api_version",
            "description": "<p>The requested version does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unrecognized_action",
            "description": "<p>The action for an endpoint is not supported.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_permission",
            "description": "<p>Not enough permission to access endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "input_invalid:_[...]",
            "description": "<p>Input for that parameter is invalid or does not match the requirements</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 400,\n        \"message\": \"...\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 200,\n        \"message\": \"OK\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/group",
    "title": "Create Group",
    "description": "<p>Creates new group with given information</p>",
    "group": "Group",
    "name": "Create_Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Group's name (min: 3; max: 16).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "displayname",
            "description": "<p>Group's displayname (min: 3; max: 16).</p>"
          },
          {
            "group": "Parameter",
            "type": "Json-Array",
            "optional": false,
            "field": "permissions",
            "description": "<p>Group's permissions.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_json_format_for_permissions",
            "description": "<p>The json format provided by <code>permissions</code> is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "input_invalid:_[PARAMETER_NAME]",
            "description": "<p>The format of the provided parameter is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "name_already_exists",
            "description": "<p>The provided name already exists in the database.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "group_not_created",
            "description": "<p>The group was not created because of an database error.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "database_unavailable",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "missing_required_params",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_access_token",
            "description": "<p>No access token provided or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authentication_required",
            "description": "<p>Authorization is required to access endpoint.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authorization_header_required",
            "description": "<p>Authorization is required to access endpoint but no header was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_endpoint",
            "description": "<p>This endpoint does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_api_version",
            "description": "<p>The requested version does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unrecognized_action",
            "description": "<p>The action for an endpoint is not supported.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_permission",
            "description": "<p>Not enough permission to access endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "input_invalid:_[...]",
            "description": "<p>Input for that parameter is invalid or does not match the requirements</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 400,\n        \"message\": \"...\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's unique access-token (Bearer).</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "api/src/endpoints/v1/groupEndpoint.php",
    "groupTitle": "Group",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 200,\n        \"message\": \"OK\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/group/:id",
    "title": "Delete group",
    "description": "<p>Delete a group matching the given id</p>",
    "group": "Group",
    "name": "Delete_group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Group's id.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "not_found",
            "description": "<p>The group was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "not_deleted",
            "description": "<p>The group was not deleted because of a database error.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "database_unavailable",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "missing_required_params",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_access_token",
            "description": "<p>No access token provided or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authentication_required",
            "description": "<p>Authorization is required to access endpoint.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authorization_header_required",
            "description": "<p>Authorization is required to access endpoint but no header was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_endpoint",
            "description": "<p>This endpoint does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_api_version",
            "description": "<p>The requested version does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unrecognized_action",
            "description": "<p>The action for an endpoint is not supported.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_permission",
            "description": "<p>Not enough permission to access endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "input_invalid:_[...]",
            "description": "<p>Input for that parameter is invalid or does not match the requirements</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 400,\n        \"message\": \"...\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's unique access-token (Bearer).</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "api/src/endpoints/v1/groupEndpoint.php",
    "groupTitle": "Group",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 200,\n        \"message\": \"OK\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/group/all",
    "title": "Get all",
    "description": "<p>Requests all existing groups in database.</p>",
    "group": "Group",
    "name": "Get_all",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Object containing groups.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 200,\n        \"message\": \"OK\"\n    },\n    \"data\": [\n        {...},\n        {...}, ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "not_found",
            "description": "<p>There are no groups in the database.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "database_unavailable",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "missing_required_params",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_access_token",
            "description": "<p>No access token provided or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authentication_required",
            "description": "<p>Authorization is required to access endpoint.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authorization_header_required",
            "description": "<p>Authorization is required to access endpoint but no header was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_endpoint",
            "description": "<p>This endpoint does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_api_version",
            "description": "<p>The requested version does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unrecognized_action",
            "description": "<p>The action for an endpoint is not supported.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_permission",
            "description": "<p>Not enough permission to access endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "input_invalid:_[...]",
            "description": "<p>Input for that parameter is invalid or does not match the requirements</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 400,\n        \"message\": \"...\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's unique access-token (Bearer).</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "api/src/endpoints/v1/groupEndpoint.php",
    "groupTitle": "Group"
  },
  {
    "type": "get",
    "url": "/group/:id",
    "title": "Get group by ID",
    "description": "<p>Requests group data with matching id.</p>",
    "group": "Group",
    "name": "Get_group_by_ID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of requested group.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Object containing group info.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>UUID of group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Name of group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.displayname",
            "description": "<p>Displayname of group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data.permissions",
            "description": "<p>Permissions of group.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 200,\n        \"message\": \"OK\"\n    },\n    \"data\": {\n        \"id\": \"aa337788-ab51-4476-91e5-c7d07d98ca1c\",\n        \"name\": \"default\",\n        \"displayname\": \"default\",\n        \"permissions\": []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "not_found",
            "description": "<p>The group was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "database_unavailable",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "missing_required_params",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_access_token",
            "description": "<p>No access token provided or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authentication_required",
            "description": "<p>Authorization is required to access endpoint.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authorization_header_required",
            "description": "<p>Authorization is required to access endpoint but no header was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_endpoint",
            "description": "<p>This endpoint does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_api_version",
            "description": "<p>The requested version does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unrecognized_action",
            "description": "<p>The action for an endpoint is not supported.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_permission",
            "description": "<p>Not enough permission to access endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "input_invalid:_[...]",
            "description": "<p>Input for that parameter is invalid or does not match the requirements</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 400,\n        \"message\": \"...\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's unique access-token (Bearer).</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "api/src/endpoints/v1/groupEndpoint.php",
    "groupTitle": "Group"
  },
  {
    "type": "put",
    "url": "/group/:id",
    "title": "Update group",
    "description": "<p>Update a group matching the given id</p>",
    "group": "Group",
    "name": "Update_group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Group's id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Group's updated name (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "displayname",
            "description": "<p>Group's updated displayname (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "permissions",
            "description": "<p>Group's updated permissions (optional).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "not_found",
            "description": "<p>The group was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "nothing_to_update",
            "description": "<p>No parameters were specified to update.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "not_updated",
            "description": "<p>The group was not updated because of a database error.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "database_unavailable",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "missing_required_params",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_access_token",
            "description": "<p>No access token provided or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authentication_required",
            "description": "<p>Authorization is required to access endpoint.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authorization_header_required",
            "description": "<p>Authorization is required to access endpoint but no header was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_endpoint",
            "description": "<p>This endpoint does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_api_version",
            "description": "<p>The requested version does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unrecognized_action",
            "description": "<p>The action for an endpoint is not supported.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_permission",
            "description": "<p>Not enough permission to access endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "input_invalid:_[...]",
            "description": "<p>Input for that parameter is invalid or does not match the requirements</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 400,\n        \"message\": \"...\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's unique access-token (Bearer).</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "api/src/endpoints/v1/groupEndpoint.php",
    "groupTitle": "Group",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 200,\n        \"message\": \"OK\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/install",
    "title": "First-time setup",
    "description": "<p>Initiates first-time setup. If finished successfully the endpoint will get deleted.</p>",
    "group": "Setup",
    "name": "Installation",
    "version": "1.0.0",
    "filename": "api/src/endpoints/v1/installEndpoint.php",
    "groupTitle": "Setup",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "database_unavailable",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "missing_required_params",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_access_token",
            "description": "<p>No access token provided or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authentication_required",
            "description": "<p>Authorization is required to access endpoint.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authorization_header_required",
            "description": "<p>Authorization is required to access endpoint but no header was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_endpoint",
            "description": "<p>This endpoint does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_api_version",
            "description": "<p>The requested version does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unrecognized_action",
            "description": "<p>The action for an endpoint is not supported.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_permission",
            "description": "<p>Not enough permission to access endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "input_invalid:_[...]",
            "description": "<p>Input for that parameter is invalid or does not match the requirements</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 400,\n        \"message\": \"...\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create user",
    "description": "<p>Creates new user with given information</p>",
    "group": "User",
    "name": "Create_user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Users name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "failed_to_get_default_group",
            "description": "<p>The default group couldnt be found in the database.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "group_not_found",
            "description": "<p>The provided group does not exist.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "name_already_exists",
            "description": "<p>The provided username does already exist.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "not_created",
            "description": "<p>The user was not created because of an database error.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "database_unavailable",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "missing_required_params",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_access_token",
            "description": "<p>No access token provided or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authentication_required",
            "description": "<p>Authorization is required to access endpoint.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authorization_header_required",
            "description": "<p>Authorization is required to access endpoint but no header was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_endpoint",
            "description": "<p>This endpoint does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_api_version",
            "description": "<p>The requested version does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unrecognized_action",
            "description": "<p>The action for an endpoint is not supported.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_permission",
            "description": "<p>Not enough permission to access endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "input_invalid:_[...]",
            "description": "<p>Input for that parameter is invalid or does not match the requirements</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 400,\n        \"message\": \"...\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's unique access-token (Bearer).</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "api/src/endpoints/v1/userEndpoint.php",
    "groupTitle": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 200,\n        \"message\": \"OK\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/user",
    "title": "Delete user",
    "description": "<p>Delete a user matching the given id</p>",
    "group": "User",
    "name": "Delete_user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User's id.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "not_found",
            "description": "<p>The user was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "not_deleted",
            "description": "<p>The user was not deleted because of a database error.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "database_unavailable",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "missing_required_params",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_access_token",
            "description": "<p>No access token provided or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authentication_required",
            "description": "<p>Authorization is required to access endpoint.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authorization_header_required",
            "description": "<p>Authorization is required to access endpoint but no header was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_endpoint",
            "description": "<p>This endpoint does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_api_version",
            "description": "<p>The requested version does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unrecognized_action",
            "description": "<p>The action for an endpoint is not supported.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_permission",
            "description": "<p>Not enough permission to access endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "input_invalid:_[...]",
            "description": "<p>Input for that parameter is invalid or does not match the requirements</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 400,\n        \"message\": \"...\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's unique access-token (Bearer).</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "api/src/endpoints/v1/userEndpoint.php",
    "groupTitle": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 200,\n        \"message\": \"OK\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/all",
    "title": "Get all",
    "description": "<p>Requests all existing users in database.</p>",
    "group": "User",
    "name": "Get_all",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Object containing profiles.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 200,\n        \"message\": \"OK\"\n    },\n    \"data\": [\n        {...},\n        {...}, ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "not_found",
            "description": "<p>There are no users in the database.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "database_unavailable",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "missing_required_params",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_access_token",
            "description": "<p>No access token provided or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authentication_required",
            "description": "<p>Authorization is required to access endpoint.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authorization_header_required",
            "description": "<p>Authorization is required to access endpoint but no header was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_endpoint",
            "description": "<p>This endpoint does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_api_version",
            "description": "<p>The requested version does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unrecognized_action",
            "description": "<p>The action for an endpoint is not supported.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_permission",
            "description": "<p>Not enough permission to access endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "input_invalid:_[...]",
            "description": "<p>Input for that parameter is invalid or does not match the requirements</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 400,\n        \"message\": \"...\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's unique access-token (Bearer).</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "api/src/endpoints/v1/userEndpoint.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Get current user",
    "description": "<p>Requests the user data of the authenticated request.</p>",
    "group": "User",
    "name": "Get_current_user_data",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Object containing profile info.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>UUID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.permissionGroup",
            "description": "<p>Permission-GroupID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "data.joined",
            "description": "<p>Date of creation of user's profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 200,\n        \"message\": \"OK\"\n    },\n    \"data\": {\n        \"id\": \"aa337788-ab51-4476-91e5-c7d07d98ca1c\",\n        \"name\": \"John Doe\",\n        \"permissionGroup\": \"edfa989c-356c-453e-9eac-a3e5cf569bc1\",\n        \"joined\": 1595839489632\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "not_found",
            "description": "<p>The user was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "database_unavailable",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "missing_required_params",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_access_token",
            "description": "<p>No access token provided or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authentication_required",
            "description": "<p>Authorization is required to access endpoint.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authorization_header_required",
            "description": "<p>Authorization is required to access endpoint but no header was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_endpoint",
            "description": "<p>This endpoint does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_api_version",
            "description": "<p>The requested version does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unrecognized_action",
            "description": "<p>The action for an endpoint is not supported.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_permission",
            "description": "<p>Not enough permission to access endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "input_invalid:_[...]",
            "description": "<p>Input for that parameter is invalid or does not match the requirements</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 400,\n        \"message\": \"...\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's unique access-token (Bearer).</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "api/src/endpoints/v1/userEndpoint.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get user by id",
    "description": "<p>Requests user data of user with matching id.</p>",
    "group": "User",
    "name": "Get_user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the requested user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Object containing profile info.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>UUID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.permissionGroup",
            "description": "<p>Permission-GroupID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "data.joined",
            "description": "<p>Date of creation of user's profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 200,\n        \"message\": \"OK\"\n    },\n    \"data\": {\n        \"id\": \"aa337788-ab51-4476-91e5-c7d07d98ca1c\",\n        \"name\": \"John Doe\",\n        \"permissionGroup\": \"edfa989c-356c-453e-9eac-a3e5cf569bc1\",\n        \"joined\": 1595839489632\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "not_found",
            "description": "<p>The user was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "database_unavailable",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "missing_required_params",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_access_token",
            "description": "<p>No access token provided or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authentication_required",
            "description": "<p>Authorization is required to access endpoint.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authorization_header_required",
            "description": "<p>Authorization is required to access endpoint but no header was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_endpoint",
            "description": "<p>This endpoint does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_api_version",
            "description": "<p>The requested version does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unrecognized_action",
            "description": "<p>The action for an endpoint is not supported.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_permission",
            "description": "<p>Not enough permission to access endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "input_invalid:_[...]",
            "description": "<p>Input for that parameter is invalid or does not match the requirements</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 400,\n        \"message\": \"...\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's unique access-token (Bearer).</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "api/src/endpoints/v1/userEndpoint.php",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Update user",
    "description": "<p>Update a user matching the given id</p>",
    "group": "User",
    "name": "Update_user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User's id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User's updated name (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>User's updated group (optional).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "not_found",
            "description": "<p>The user was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "nothing_to_update",
            "description": "<p>No parameters were specified to update.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "not_updated",
            "description": "<p>The user was not updated because of a database error.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "database_unavailable",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "missing_required_params",
            "description": "<p>Cannot connect to database to retrieve data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_access_token",
            "description": "<p>No access token provided or expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authentication_required",
            "description": "<p>Authorization is required to access endpoint.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "authorization_header_required",
            "description": "<p>Authorization is required to access endpoint but no header was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_endpoint",
            "description": "<p>This endpoint does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_api_version",
            "description": "<p>The requested version does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unrecognized_action",
            "description": "<p>The action for an endpoint is not supported.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_permission",
            "description": "<p>Not enough permission to access endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "input_invalid:_[...]",
            "description": "<p>Input for that parameter is invalid or does not match the requirements</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 400,\n        \"message\": \"...\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's unique access-token (Bearer).</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "api/src/endpoints/v1/userEndpoint.php",
    "groupTitle": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 200,\n        \"message\": \"OK\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    }
  }
] });
