const localStorageKeyName = 'tagList';
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
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
        // this.data =[{id:"1",name:"1"},{id:"2",name:"2"}]
        const names = this.data.map(item => item.name);
        if (names.indexOf(name) >= 0) { return 'duplicated' }
        this.data.push({ id: name, name: name });//由于id没有取数据库没法自增，只能取name
        this.save()
        return "success";
    },
    //保存数据
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
};

export default tagListModel;