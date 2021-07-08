const localStorageKeyName = 'recordList';
const recordListModel = {
    //克隆 可以传一个数组也可以传其中的一项
    clone(data: RecordItem[] | RecordItem) {
        return JSON.parse(JSON.stringify(data));
    },
    // 获取数据
    fetch() {
        //as强转
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    },
    //保存数据
    save(data: RecordItem[]) {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    }
};

export default recordListModel;