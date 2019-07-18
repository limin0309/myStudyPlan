import React, { Component } from 'react';
import {
  Card,
  Button,
  Row,
  Col,
  Spin,
  Collapse,
  message,
} from 'antd';
import styles from './PatrolShopTask.less';
import TaskItem from './TaskItem';
// import { getCurrentBusiness, getUrlParam2 ,getCurrentStore} from '../../utils/utils';

const { Panel } = Collapse;

// @connect(({ orderDetails, loading,global }) => ({
//     orderDetails,
//   loading: loading.models.orderDetails || false,
//   storeData: global.storeData,
// }))

export default class OrderDetailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: ["1"], // 折叠展开数据
      taskDetail: {
        checkCategoryTaskItemDTOList:
        [
          {
            categoryName: "分类2",
            categorySort: 1010,
            itemList: null,
            taskItemList: [
              {
                categoryName: "分类2",
                categorySort: 1010,
                checkItemName: "第三方第三方但是浮动幅度是",
                checkItemResult: "所发生的第三方",
                checkItemType: 3,
                feedbackInfo: "",
                feedbackPicUrl: "",
                id: 847,
                itemScore: 1,
                itemTotalScore: 7,
                picUrl: "",
                rectification: null,
                remark: null
              }]
            },
              {
                categoryName: "分类2",
                categorySort: 1010,
                itemList: null,
                taskItemList: [
                  {
                    categoryName: "分类2",
                    categorySort: 1010,
                    checkItemName: "第三方第三方但是浮动幅度是",
                    checkItemResult: "所发生的第三方",
                    checkItemType: 3,
                    feedbackInfo: "",
                    feedbackPicUrl: "",
                    id: 847,
                    itemScore: 1,
                    itemTotalScore: 7,
                    picUrl: "",
                    rectification: null,
                    remark: null
                  }]
              },
              
  
            ]
          }
          
      }
    }
  

  componentDidMount() {
    this.setState({
      taskDetail: this.handleNote(this.state.taskDetail),
      activeKey: this.getDefaultKey(this.state.taskDetail.checkCategoryTaskItemDTOList || []),
    })
  }


  getDefaultKey = (data) => {
    const arr = [];
    for (let i = 0; i < data.length; i += 1) {
      arr.push(i + 1 + '');
    }
    return arr;
  }

  handleNote = (data) => {
    if (data.checkCategoryTaskItemDTOList && data.checkCategoryTaskItemDTOList.length) {
      for (let i = 0; i < data.checkCategoryTaskItemDTOList.length; i += 1) {
        let item = data.checkCategoryTaskItemDTOList[i];
        item = Object.assign(item, { key: i + 1 + '' });
      }
    }
    return data;
  }

  collChange = (value) => {
    this.setState({
      activeKey: value,
    });
  }
  


  render() {
    const { taskDetail } = this.state;
    console.log(taskDetail)


    
  function callback(key) {
    console.log(key);
  }
  
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;



    return (


      <Card
        title={
          <div className={styles.titleWrap}>
            <div style={{ borderLeft: '4px solid #E8514B', paddingLeft: '14px', marginTop: '6px' }}>计划</div>
          </div>
        }
      >
        {  taskDetail && taskDetail.checkCategoryTaskItemDTOList.length > 0 ?

           (<Collapse
           activeKey={this.state.activeKey}
           bordered={false}
           onChange={this.collChange}
         >
           {
             taskDetail && taskDetail.checkCategoryTaskItemDTOList && taskDetail.checkCategoryTaskItemDTOList.map((item) => {
               return (
                 <Panel
                   header={
                     <div>
                       <span>{item.categoryName}</span>
                       <span
                         style={{
                           color: '#4A90E2',
                           float: 'right',
                           marginRight: '47px',
                         }}
                       >
                         {this.state.activeKey.indexOf(item.key) != -1
                           ? '收起'
                           : '展开'}
                       </span>
                     </div>
                   }
                   key={item.key}
                 >
                   {
                     item.taskItemList.map((childItem, idx) => {
                       return (
                         <TaskItem data={childItem} hasBorder={item.taskItemList.length !== idx + 1} />
                       );
                     })
                   }
                 </Panel>
               );
             })
           }
         </Collapse>): <div style={{ textAlign: 'center' }}>暂无数据</div>
        }






        
            <Collapse onChange={callback}>
            <Panel header="This is panel header 1" key="1">
              <Collapse defaultActiveKey="1">
                <Panel header="This is panel nest panel" key="1">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>,
        

      </Card>


    );
  }
}
