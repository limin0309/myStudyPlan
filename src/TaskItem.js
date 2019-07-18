import React, { Component } from 'react';
import {
  Icon,
  Modal,
} from 'antd';

import styles from './PatrolShopTask.less';


export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  handlePreview = (file) => {
    this.setState({
      previewImage: file,
      previewVisible: true,
    });
  }

  render() {
    const { previewImage, previewVisible } = this.state;
    const { data } = this.props;
    return (
      <div key={data.id}>
        <div className={styles.taskItem}>
          <div className={styles.title}>{data.checkItemName}</div>
          {
            data.itemScore !== null &&
            (
              <div className={styles.scoreWrap}>
                <span className={styles.Label}>得分：</span>
                <span className={styles.scoreValue}>{data.itemScore}分</span>
              </div>
            )
          }
          <div>
            <span className={styles.label}>结果：</span>
            <span>{data.checkItemResult}</span>
          </div>
          <div>
            <span className={styles.label}>备注信息：</span>
            <span>{data.remark == null ? '--' : data.remark}</span>
          </div>
          <div className={styles.imgWrap}>
            {
              data.picUrl && data.picUrl !== '' && data.picUrl.split(',').map((item, idx) => {
                return (
                  <div key={idx} className={styles.imgItem}>
                    <div className={styles.imgMask}></div>
                    <Icon onClick={() => { this.handlePreview(item); }} type="eye" className={styles.eyeIcon} />
                    <img src={item} alt="" />
                  </div>
                );
              })
            }
          </div>
          {
            data.feedbackInfo && data.feedbackInfo !== '' &&
            (
              <div className={styles.feedbackWrap}>
                <span className={styles.label}>反馈意见：</span>
                <span>{data.feedbackInfo}</span>
              </div>
            )
          }
          <div className={styles.imgWrap}>
            {
              data.feedbackPicUrl && data.feedbackPicUrl !== '' && data.feedbackPicUrl.split(',').map((item, idx) => {
                return (
                  <div key={idx} className={styles.imgItem}>
                    <div className={styles.imgMask}></div>
                    <Icon onClick={() => { this.handlePreview(item); }} type="eye" className={styles.eyeIcon} />
                    <img src={item} alt="" />
                  </div>
                );
              })
            }
          </div>
        </div>
        <Modal
          title="预览"
          visible={previewVisible}
          footer={null}
          onCancel={() => { this.setState({ previewVisible: false }); }}
        >
          <img src={previewImage} style={{ width: '100%' }} alt="预览" />
        </Modal>
      </div>
    );
  }
}
