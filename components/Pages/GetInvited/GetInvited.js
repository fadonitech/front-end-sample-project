import { useState } from 'react';
import { SubscribeForm } from './SubscribeForm';
import SuccessMessage from './SuccessMessage'

export const GetInvitedSection = ({ handleAlert }) => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className={`getinvited${loading || success ? `-loading` : ''}`}>
      {
        success
          ? <SuccessMessage />
          : <SubscribeForm
            loading={loading}
            setLoading={setLoading}
            setSuccess={setSuccess}
          />
      }
    </div >
  )
}
