module.exports = {
    rules: {
        'no-console': 'off',
        "no-restricted-syntax": [
            "error",
            {
                "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
                "message": "Unexpected property on console object was called"
            }
        ]
    },
    parserOptions: {
        "ecmaVersion": 7,
        "sourceType": "module"
    }

}