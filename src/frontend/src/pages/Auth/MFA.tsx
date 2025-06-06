import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import { Button, Checkbox, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleMfaLogin } from '../../functions/auth';
import { Wrapper } from './Layout';

export default function Mfa() {
  const simpleForm = useForm({ initialValues: { code: '', remember: false } });
  const navigate = useNavigate();
  const location = useLocation();
  const [loginError, setLoginError] = useState<string | undefined>(undefined);

  return (
    <Wrapper titleText={t`Multi-Factor Authentication`} logOff>
      <TextInput
        required
        label={t`TOTP Code`}
        name='TOTP'
        description={t`Enter your TOTP or recovery code`}
        {...simpleForm.getInputProps('code')}
        error={loginError}
      />
      <Checkbox
        label={t`Remember this device`}
        name='remember'
        description={t`If enabled, you will not be asked for MFA on this device for 30 days.`}
        {...simpleForm.getInputProps('remember', { type: 'checkbox' })}
      />
      <Button
        type='submit'
        onClick={() =>
          handleMfaLogin(navigate, location, simpleForm.values, setLoginError)
        }
      >
        <Trans>Log in</Trans>
      </Button>
    </Wrapper>
  );
}
