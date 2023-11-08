import { Form, Input, Modal } from 'antd';
import { ARTICLE } from 'types';
import {useContext, useEffect, useState} from 'react';
import {editArticle} from 'actions';
import NotificationContext from 'context/NotificationContext/NotificationContext';

type ModalProps = {
  article: ARTICLE,
  isOpen: boolean,
  onClose: () => void,
  onSuccess: (article: ARTICLE) => void
}
function EditArticleModal(props: ModalProps) {
  const { article, isOpen, onClose, onSuccess } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  const { openNotification } = useContext(NotificationContext);
  
  useEffect(() => {
    if (isOpen) {
      form.setFieldsValue({
        title: article.title,
        content: article.body
      });
    }
  }, [isOpen, form, article]);
  
  const handleClose = () => {
    form.resetFields();
    onClose();
  };
  
  const onSubmit = async () => {
    setIsLoading(true);
    let values;
    try {
      values = await form.validateFields();
    } catch (error) {
      console.log('Validate Failed:', error);
      setIsLoading(false);
      return;
    }
  
    const response = await editArticle({ ...article, body: values.content, title: values.title });
    if (response.error) {
      openNotification(response.error, 'error');
    } else {
      openNotification('The article has been successfully edited', 'success');
      onSuccess({ ...article, body: values.content, title: values.title });
      handleClose();
    }
    setIsLoading(false);
  };
  
  return (
    <Modal
      open={isOpen}
      title="Edit article"
      okText="Save"
      cancelText="Cancel"
      onCancel={handleClose}
      onOk={onSubmit}
      confirmLoading={isLoading}
    >
      <Form form={form} layout="vertical" requiredMark={false}>
        <Form.Item label="Title" name="title" rules={[{required: true, message: 'An article must have a title'}]}>
          <Input value={article.title} />
        </Form.Item>
        <Form.Item label="Content" name="content" rules={[{required: true, message: 'An article must have a body'}]}>
          <Input.TextArea value={article.body} />
        </Form.Item>
      </Form>
    </Modal>
  )
};

export default EditArticleModal;
