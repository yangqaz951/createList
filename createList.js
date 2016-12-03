/**
 * Created by Administrator on 2016/12/3.
 */

var projectData = {
    name : 'node',
    'fileData' : [
        {
            'name':'db',
            'type':'dir'
        },
        {
            'name':'models',
            'type':'dir'
        },
        {
            'name':'public',
            'type':'dir'
        },
        {
            'name':'routers',
            'type':'dir'
        },
        {
            'name':'schemas',
            'type':'dir'
        },
        {
            'name':'view',
            'type':'dir'
        },
        {
            'name':'inedx.html',
            'type':'file',
            'content' : '<html>\n\t<head>\n\t\t<title>node</title>\n\t</head>\n\t<body>\n\t\t<h1>hello node.</h1>\n\t</body>\n</html>'
}
    ]
}

var fs = require('fs');

if(projectData.name){
    fs.mkdirSync(projectData.name);
    var fileData = projectData.fileData;
    if(fileData && fileData.forEach) {
        fileData.forEach(function(f){
            f.path = projectData.name + '/' + f.name;
            f.content = f.content || '';
            switch (f.type){
                case 'dir' :
                    fs.mkdirSync(f.path);
                    break;
                case 'file':
                    fs.writeFileSync(f.path,f.content);
                    break;
                default:
                    break;
            }
        });
    }
}