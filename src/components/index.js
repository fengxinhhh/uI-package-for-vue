import Button from './Button.vue'
import RadioGroup from './Radio.vue'
import CheckGroup from './CheckBox.vue'
import Input from './Input.vue'
import InputNumber from './InputNumber.vue'
import Select from './Select.vue'
import Cascader from './Cascader.vue'
import Table from './Table.vue'
import TableColums from './Table-Colums.vue'
import Card from './Card.vue'
import Collapse from './Collapse.vue'
import CollapseItem from './Collapse-Item.vue'
import Rate from './Rate.vue'
import Badge from './Badge.vue'
import Loading from './Loading.vue'
import Pagination from './Pagination.vue'
import Breadcrumb from './Breadcrumb.vue'
import Tree from './Tree.vue'
import Lazyimg from './Lazyimg.vue'
const components = [
    Button,
    RadioGroup,
    CheckGroup,
    Input,
    InputNumber,
    Select,
    Cascader,
    Table,
    TableColums,
    Card,
    Collapse,
    CollapseItem,
    Rate,
    Badge,
    Loading,
    Pagination,
    Breadcrumb,
    Tree,
    Lazyimg
]

const install = function (Vue) {
    if (install.installed) return
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))
    if (typeof window !== 'undefined' && window.Vue) {
        install(window.Vue)
    }
}

export default install 