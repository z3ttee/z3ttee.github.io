define({ "api": [
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
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 200,\n        \"message\": \"OK\"\n    }\n}",
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
    "error": {
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
    "error": {
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
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": {\n        \"code\": 400,\n        \"message\": \"...\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    }
  }
] });
