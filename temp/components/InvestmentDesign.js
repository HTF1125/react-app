/* eslint-disable no-param-reassign */
import {
  CopyOutlined,
  DeleteOutlined,
  HeartOutlined,
  HomeOutlined,
  PlusOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import {
  ProCard,
  ProForm,
  ProFormDependency,
  ProFormField,
  ProFormList,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
} from "@ant-design/pro-components";
import { useState } from "react";

const IconMap = {
  PlusOutlined,
  HeartOutlined,
  DeleteOutlined,
  CopyOutlined,
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
};
const initialValue = {
  copyIconProps: {
    show: true,
    Icon: "CopyOutlined",
    tooltipText: "复制此行",
  },
  deleteIconProps: {
    show: true,
    Icon: "DeleteOutlined",
    tooltipText: "删除此行",
  },
  creatorButtonProps: {
    show: true,
    creatorButtonText: "新建一行",
    position: "button",
    type: "dashed",
    icon: "PlusOutlined",
  },
};
export const InvestmentDesign = () => {
  const [stateValue, setStateValue] = useState({});
  const [json, setJson] = useState(() => JSON.stringify(initialValue));
  return (
    <ProCard colSpan="calc(100% - 400px)">
      <ProForm>
        <ProFormList
          name="users"
          label="Investment Design"
          initialValue={[
            {
              name: "100000",
            },
          ]}
          creatorButtonProps={{
            position: "bottom",
          }}
          {...stateValue}
        >
          <ProForm.Group key="group" size={8}>
            <ProFormText name="name" label="Initial Investment" />
          </ProForm.Group>
        </ProFormList>
      </ProForm>
    </ProCard>
  );
};
