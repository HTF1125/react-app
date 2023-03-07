import {
    LockOutlined,
    MobileOutlined,
    UserOutlined,
    GooglePlusOutlined,
  } from '@ant-design/icons';
  import {
    LoginForm,
    ProFormCaptcha,
    ProFormCheckbox,
    ProFormText,
    ProConfigProvider,
  } from '@ant-design/pro-components';
  import { message, Space, Tabs } from 'antd';
  import { useState } from 'react';


  const iconStyles = {
    marginInlineStart: '16px',
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '24px',
    verticalAlign: 'middle',
    cursor: 'pointer',
  };

  export const Login = () => {
    const [loginType, setLoginType] = useState('phone');
    return (
      <ProConfigProvider hashed={false}>
        <div style={{ backgroundColor: 'white' }}>
          <LoginForm
            title="Github"
            subTitle="Largest Open Source Code platform"
            actions={
              <Space>
                <GooglePlusOutlined style={iconStyles}/>
              </Space>
            }
          >
            <Tabs
              centered
              activeKey={loginType}
              onChange={(activeKey) => setLoginType(activeKey)}
            >
              <Tabs.TabPane key={'account'} tab={'Use ID & Password'} />
              <Tabs.TabPane key={'phone'} tab={'Cell Phone'} />
            </Tabs>
            {loginType === 'account' && (
              <>
                <ProFormText
                  name="username"
                  fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined className={'prefixIcon'} />,
                  }}
                  placeholder={'User Id or Email'}
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your user id!',
                    },
                  ]}
                />
                <ProFormText.Password
                  name="password"
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className={'prefixIcon'} />,
                  }}
                  placeholder={'Password'}
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your password',
                    },
                  ]}
                />
              </>
            )}
            {loginType === 'phone' && (
              <>
                <ProFormText
                  fieldProps={{
                    size: 'large',
                    prefix: <MobileOutlined className={'prefixIcon'} />,
                  }}
                  name="mobile"
                  placeholder={'Phone Number'}
                  rules={[
                    {
                      required: true,
                      message: 'Passcode!',
                    },
                    {
                      pattern: /^1\d{10}$/,
                      message: 'wrong format',
                    },
                  ]}
                />
                <ProFormCaptcha
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className={'prefixIcon'} />,
                  }}
                  captchaProps={{
                    size: 'large',
                  }}
                  placeholder={'enter your authenticatioin code'}
                  captchaTextRender={(timing, count) => {
                    if (timing) {
                      return `${count} ${'get authentication code'}`;
                    }
                    return 'get authentication code';
                  }}
                  name="captcha"
                  rules={[
                    {
                      required: true,
                      message: '请输入验证码！',
                    },
                  ]}
                  onGetCaptcha={async () => {
                    message.success('获取验证码成功！验证码为：1234');
                  }}
                />
              </>
            )}
            <div
              style={{
                marginBlockEnd: 24,
              }}
            >
              <ProFormCheckbox noStyle name="autoLogin">
                Auto Login
              </ProFormCheckbox>
              <a
                style={{
                  float: 'right',
                }}
              >
                Forgot passwrod?
              </a>
            </div>
          </LoginForm>
        </div>
      </ProConfigProvider>
    );
  };