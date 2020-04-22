# Jasypt

### Version 1.0.2 / `2020-04-22`
1. Use Buffer.from() and Buffer.alloc() to replace the new Buffer() that was deprecated.

### Version 0.1.3 / `2019-05-31`
1. 扫描 ENC() 改为反向扫描右括号

### Version 0.1.2 / `2019-05-30`
1. 新增 decryptConfig 接口，对标 spring boot 中对配置项的ENC(xxx)进行解密

### Version 0.1.1 / `2019-05-30`
1. 发布第一个版本，支持 setPassword、encrypt、decrypt
2. 支持SDK、命令行方式