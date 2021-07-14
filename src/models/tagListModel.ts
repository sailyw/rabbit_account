import createId from '@/lib/createId';
const localStorageKeyName = 'tagList';

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
    // 更新tag
    update(id, name) {
        const idList = this.data.map(item => item.id)
        if (idList.indexOf(id) >= 0) {
            const names = this.data.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return "duplicated"
            } else {
                const tag = this.data.filter(item => item.id === id)[0]
                tag.name = name;
                this.save()
                return "success"
            }
        } else {
            return 'not found'
        }
    },
    //删除数据
    remove(id: string) {
        let index = -1;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i;
                break;
            }
        }
        this.data.splice(index, 1);
        this.save();
        return true;
    },
    //保存数据
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
};

export default tagListModel;