// 全局声明，d->declaration
type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number; // 数据类型 object | string
    createdAt?: Date;  // 类 / 构造函数
}
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated';//联合类型
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    remove: (id: string) => boolean;
    save: () => void;//void代表没用返回值
}
interface Window {
    tagList: Tag[];
    createTag: (name: string) => void;
    findTag: (id: string) => Tag | undefined;
    removeTag: (id: string) => boolean;
    //由于和上面TagListModel中的update返回值一模一样，可不用如此繁琐
    // updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    updateTag: TagListModel["update"];
    recordList: RecordItem[];
    createRecord: (record: RecordItem) => void;
}