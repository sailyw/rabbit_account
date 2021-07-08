const localStorageKeyName = 'tagList';
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: string[];
    fetch: () => string[];
    create: (name: string) => 'success' | 'duplicated';//联合类型
    save: () => void;//void代表没用返回值
}
const tagListModel: TagListModel = {
    data: [],
    // 获取数据
    fetch() {
        //as强转
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data;
    },
    //创建tag
    create(name) {
        if (this.data.indexOf(name) >= 0) { return 'duplicated' }

        this.data.push(name);
        this.save()
        return "success";
    },
    //保存数据
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
};

export default tagListModel;