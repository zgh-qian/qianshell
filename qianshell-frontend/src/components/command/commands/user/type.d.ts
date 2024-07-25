declare namespace User {
    /**
     * 用户类型
     */
    interface UserType {
        userAccount: string,
        userName: string;
        userEmail?: string;
        createTime?: date;
        updateTime?: date;
    }
}
