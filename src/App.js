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
      activeKey: [], // 折叠展开数据

      checkCategoryTaskItemDTOList:
        [
          {
            categoryName: "HTML",
            taskItemList: [
              {
                categoryName: "HTML/HTML5",
                categorySort: 'https://www.baidu.com/',
                checkItemName: "https://github.com/limin0309/myStudyPlan",
              }, {
                categoryName: "HTML/HTML5",
                categorySort: 'https://www.baidu.com/',
                checkItemName: "https://github.com/limin0309/myStudyPlan",
              }, {
                categoryName: "HTML/HTML5",
                categorySort: 'https://www.baidu.com/',
                checkItemName: "https://github.com/limin0309/myStudyPlan",
              }]
          },
          {
            categoryName: "CSS",
            taskItemList: [
              {
                categoryName: "CSS/CSS3",
                categorySort: 'https://www.baidu.com/',
                checkItemName: "https://github.com/limin0309/myStudyPlan",
              }]
          },
          {
            categoryName: "JS",
            taskItemList: [
              {
                categoryName: "JS",
                categorySort: 'https://www.baidu.com/',
                checkItemName: "https://github.com/limin0309/myStudyPlan",
              },{
                categoryName: "ES6",
                categorySort: 'https://www.baidu.com/',
                checkItemName: "https://github.com/limin0309/myStudyPlan",
              }]
          },
          {
            categoryName: "VUE",
            taskItemList: [
              {
                categoryName: "VUE",
                categorySort: 'https://www.baidu.com/',
                checkItemName: "https://github.com/limin0309/myStudyPlan",
              }]
          }, {
            categoryName: "React",
            taskItemList: [
              {
                categoryName: "React",
                categorySort: 'https://www.baidu.com/',
                checkItemName: "https://github.com/limin0309/myStudyPlan",
              }]
          },
        ]


    }
  }


  componentDidMount() {

  }

  collChange = (value) => {
    this.setState({
      activeKey: value,
    });
  }



  render() {
    const { checkCategoryTaskItemDTOList } = this.state;



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


        {checkCategoryTaskItemDTOList.length > 0 ?
          (
            checkCategoryTaskItemDTOList.map((item, idx) => {
              return (
                <Collapse onChange={callback} >
                  <Panel header={item.categoryName} key="1">
                    {
                      item.taskItemList.map((itim1,ss) => {
                        return (
                          <Collapse defaultActiveKey="1">
                            <Panel header={itim1.categoryName} key="1">
                              <p>整理笔记链接：{itim1.checkItemName}</p>
                              <p>git地址：{itim1.categorySort}</p>
                            </Panel>
                          </Collapse>
                        )

                      })
                    }

                  </Panel>
                </Collapse>
              )
            })

          ) : <div style={{ textAlign: 'center' }}>暂无数据</div>
        }


      </Card>


    );
  }
}
