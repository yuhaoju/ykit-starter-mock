module.exports = [
    {
        pattern: '/test-local-json.do',
        responder: './mockData/local-data.json'
    },
    {
        pattern: '/test-local-js.do',
        responder: './mockData/local-data.js'
    },
    {
        pattern: '/test-remote.do',
        responder: {name: 'Roscoe'}
    },
    {
        pattern: '/test-post.do',
        responder: {name: 'Roscoe'}
    },
    {
        pattern: '/test-func.do',
        responder: function(req, res) {
            res.end('plain text');
        }
    },
    {
        pattern: '/test-jsonp.do',
        responder: {name: 'Roscoe'},
        jsonp: "callback"
    },
    {
        pattern: '/test-mock-data.do',
        responder: {
            "array|1-10": [
                "Mock.js"
            ]
        }
    }
];
