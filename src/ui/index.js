import Tabbar from './components/tabbar/index'
import Tabs from './components/tabs/index'
import TabPane from './components/tab-pane/index'
import Input from './components/input/index'
import Col from './components/col/index'
import Row from './components/row/index'
import Button from './components/button/index'
import ButtonGroup from './components/button-group/index'
import Drawer from './components/drawer/index'
import Modal from './components/modal/index'
import NavigateBar from './components/navigate-bar/index'
import Card from './components/card/index'
import Empty from './components/empty/index'
import Link from './components/link/index'
import Form from './components/form/index'
import FormItem from './components/form-item/index'
import SwipeAction from './components/swipe-action/index'
import Message from './components/message/index'
import Picker from './components/picker/index'
import Grid from './components/grid/index'
import Tag from './components/tag/index'
import Timeline from './components/timeline/index'
import TimelineItem from './components/timeline-item/index'
import FloatButton from './components/float-button/index'
import InputNumber from './components/input-number'
// import Radio from './components/radio/index'
// import RadioGroup from './components/radio-group/index'
// import Switch from './components/switch'
import $modal from './components/modal/src/main.js'

const components = [
  Tabbar,
  TabPane,
  Tabs,
  Input,
  Col,
  Row,
  Button,
  ButtonGroup,
  Modal,
  Drawer,
  NavigateBar,
  Card,
  Empty,
  Link,
  Form,
  FormItem,
  SwipeAction,
  Message,
  Picker,
  Grid,
  Tag,
  Timeline,
  TimelineItem,
  FloatButton,
  InputNumber
  // Radio,
  // RadioGroup,
  // Switch
]

const install = function (Vue) {
  Vue.prototype.$modal = $modal

  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.prototype.$modal = $modal
  window.Vue.prototype.$message = $message
  install(window.Vue)
}
export default {
  install,
  ...components
}
