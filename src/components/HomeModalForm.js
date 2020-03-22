import { Button, Modal, Form, Input } from 'antd';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    class extends React.Component {
        showModal() {
            this.setState({
                visible: true,
          });
        }

        handleOk() {
            this.setState({
                ModalText: 'Verifying...',
                confirmLoading: true,
        });

        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
            this.props.history.push('/photos');
            }, 2000);
        }

        handleCancel = () => {
            this.setState({
                visible: false,
            });
        }
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            
            return (
                <Modal
                  title="Title"
                  visible={visible}
                  onOk={this.handleOk}
                  confirmLoading={confirmLoading}
                  onCancel={this.handleCancel}
                >
                  <p>{ModalText}</p>
                  <Form layout="vertical">
                    <Form.Item label="Title">
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Please input the title of collection!' }],
                        })(
                    <Input />
                  )}
                </Form.Item>

                <Form.Item label="Description">
                  {getFieldDecorator('description')(<Input type="textarea" />)}
                </Form.Item>
              </Form>
        </Modal>
      );
    }
  }
);