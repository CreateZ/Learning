<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>

    </style>
</head>
<body>

<script>
    let conf = {
        adapter: 'sqlite',
        db: {
            sqlite: {
                name: 'xxx.sqlite'
            },
            mysql: {
                name: 'xxx',
                username: 'work',
                password: '*******'
            }

        }
    };

    //直接引用
    let conf2 = conf;
    conf2.adapter = 'mysql';

    console.log(conf.adapter);

    //ES5 浅拷贝(只能拷贝一级的属性)
    conf.adapter = 'sqlite';
    let copied = Object.assign({}, conf);
    copied.adapter = 'mysql';

    console.log(conf.adapter);
    console.log(copied.adapter);

    copied.db.sqlite.name = 'yyy.sqlite';

    console.log(conf.db.sqlite.name);

    //深拷贝
    function deepCopy(des, src) {
        for (var key in src) {
            let prop = src[key];
            if (typeof prop === 'object') {
                des[key] = des[key] || {};
                deepCopy(des[key], src[key]);
            } else {
                des[key] = src[key];
            }
        }
        return des;
    }

    let deepCopied = deepCopy({}, conf);
    deepCopied.db.sqlite.name = 'zzz.sqlite';

    console.log(deepCopied.db.sqlite.name, conf.db.sqlite.name);



</script>
</body>
</html>
