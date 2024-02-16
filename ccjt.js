/**
虫虫吉他 2.3.0

[rewrite_local]

http://cc.lzjoy.com url script-response-body https://raw.githubusercontent.com/JasonleeQAQ/Rewrite/main/ccjt.js

*/

let obj = JSON.parse($response.body);

if ($request.url.includes("http://cc.lzjoy.com/?urlparam=common/user/GetVip") || $request.url.includes("http://cc.lzjoy.com/?urlparam=pad/opern/detail")) {
    obj.list.vip_will_expire_year = "1";
    obj.list.svip_expire_date = "2049-02-23 22:44:50";
    obj.list.vip_will_expire = "1";
    obj.list.svip_create = "2024-02-16 22:44:50";
    obj.list.vip_num = "1";
    obj.list.is_buy = "1";
    obj.list.expire_date = "2049-02-23 22:44:50";
    obj.list.is_vip = "1";
    obj.list.expire_date_1 = "2049-02-23 22:44:50";
} else if ($request.url.includes("http://cc.lzjoy.com/?urlparam=pad/course/getCourseDetailForSingleOpern")) {
    obj.list.vip_will_expire_year = "1";
    obj.list.svip_expire_date = "2049-02-23 22:44:50";
    obj.list.vip_will_expire = "1";
    obj.list.svip_create = "2024-02-16 22:44:50";
    obj.list.vip_num = "1";
    obj.list.is_buy = "1";
    obj.list.expire_date = "2049-02-23 22:44:50";
    obj.list.is_vip = "1";
    obj.list.expire_date_1 = "2049-02-23 22:44:50";
}

$done({ body: JSON.stringify(obj) });
