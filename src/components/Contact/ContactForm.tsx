'use client'

import action from '@/actions/contact-form'
import { useTranslation } from '@/hooks/useTranslation'
import { useActionState } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'

const ContactForm = () => {
  const { t } = useTranslation()
  const [status, formAction, isPending] = useActionState(action, null)

  if (status?.success) {
    return (
      <p className="text-accent self-center text-center text-2xl font-medium">{t('contact.form.success')}</p>
    )
  }

  return (
    <form action={formAction}>
      <Input
        label={t('contact.form.fullName')}
        id="name"
        name="name"
        placeholder={t('contact.form.fullNamePlaceholder')}
        required
      />
      <Input
        label={t('contact.form.email')}
        id="email"
        type="email"
        name="email"
        placeholder={t('contact.form.emailPlaceholder')}
        required
      />
      <Input
        label={t('contact.form.subject')}
        id="subject"
        name="subject"
        placeholder={t('contact.form.subjectPlaceholder')}
      />
      <Textarea
        label={t('contact.form.message')}
        id="message"
        name="message"
        placeholder={t('contact.form.messagePlaceholder')}
        rows={7}
        required
      />
      {!status?.success && status?.message && (
        <p className="my-2 font-light text-red-600">{status.message}</p>
      )}
      <Button text={isPending ? t('contact.form.submitting') : t('contact.form.submit')} disabled={isPending} />
    </form>
  )
}

export default ContactForm
