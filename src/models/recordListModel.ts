const localStorageKeyName = 'recordList';
const recordListModel = {
    data: [] as RecordItem[],
    //克隆 可以传一个数组也可以传其中的一项
    clone(data: RecordItem[] | RecordItem) {
        return JSON.parse(JSON.stringify(data));
    },
    // 获取数据
    fetch() {
        //as强转
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        return this.data
    },
    //保存数据
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
};

export default recordListModel;