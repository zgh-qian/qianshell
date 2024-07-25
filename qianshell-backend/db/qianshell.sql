-- 创建库
create database if not exists qianshell;
-- 切换库
use qianshell;
drop table if exists user;
create table if not exists user
(
    id           bigint auto_increment comment 'id' primary key,
    userAccount  varchar(256)                           not null unique comment '账号',
    userPassword varchar(512)                           not null comment '密码',
    userName     varchar(256)                           null comment '用户昵称',
    userAvatar   varchar(1024)                          null comment '用户头像',
    userProfile  varchar(512)                           null comment '用户简介',
    userRole     varchar(256) default 'user'            not null comment '用户角色：admin/vip/user/ban',
    userEmail    varchar(256)                           null unique comment '邮箱，唯一',
    userPhone    varchar(128)                           null unique comment '手机号，唯一，必须是11位数字',
    userGender   tinyint      default 0                 null comment '性别：0-未知，1-男，2-女',
    userBirthday date                                   null comment '生日，存储年月日',
    userAddress  varchar(512)                           null comment '地址',
    createTime   datetime     default CURRENT_TIMESTAMP not null comment '创建时间',
    updateTime   datetime     default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment '更新时间',
    isDelete     tinyint      default 0                 not null comment '是否删除',
    index idx_user_id (id)
) comment '用户' collate = utf8mb4_unicode_ci;