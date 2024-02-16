/**
虫虫吉他 2.3.0

[rewrite_local]

http://cc.lzjoy.com url script-response-body https://raw.githubusercontent.com/JasonleeQAQ/Rewrite/main/ccjt.js

*/

let obj = JSON.parse($response.body);

if ($request.url.includes("http://cc.lzjoy.com/?urlparam=common/user/GetVip") || $request.url.includes("http://cc.lzjoy.com/?urlparam=pad/opern/detail")) {
    obj.list.is_buy = "1";
    obj.list.is_vip = "1";
    obj.list.has_buy = "1";
    obj.list.expire_date = "1980401144";
    obj.list.vip_expire_date = "1980401144";
    obj.list.vip_type = "1021";
    obj.list.vip_will_expire_year = "100";
    obj.list.svip_expire_date = "1980401144";
    obj.list.vip_will_expire = "1980401144";
    obj.list.is_lifelong_vip = "1";
    obj.list.expire_date_1 = "1980401144";
    obj.list.vip_num = "1021";
} else if ($request.url.includes("http://cc.lzjoy.com/?urlparam=pad/course/getCourseDetailForSingleOpern")) {
    obj.list.is_buy = "1";
    obj.list.is_vip = "1";
    obj.list.has_buy = "1";
    obj.list.expire_date = "1980401144";
    obj.list.vip_expire_date = "1980401144";
    obj.list.vip_type = "1021";
    obj.list.vip_will_expire_year = "99";
    obj.list.svip_expire_date = "1980401144";
    obj.list.vip_will_expire = "1980401144";
    obj.list.is_lifelong_vip = "1";
    obj.list.expire_date_1 = "1980401144";
    obj.list.vip_num = "1021";
}

$done({ body: JSON.stringify(obj) });
