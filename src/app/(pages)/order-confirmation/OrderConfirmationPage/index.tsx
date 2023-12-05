'use client'

import React, { Fragment, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import { Button } from '../../../_components/Button'
import { Message } from '../../../_components/Message'
import { useCart } from '../../../_providers/Cart'

import classes from './index.module.scss'

export const OrderConfirmationPage: React.FC<{}> = () => {
  const searchParams = useSearchParams()
  const orderID = searchParams.get('order_id')
  const error = searchParams.get('error')

  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div>
      {error ? (
        <Fragment>
          <Message error={error} />
          <p>
            {`Ваш платіж пройшов успішно, але під час обробки замовлення виникла помилка. Будь ласка, зв'яжіться з нами, щоб вирішити цю проблему.`}
          </p>
          <div className={classes.actions}>
            <Button href="/account" label="Переглянути обліковий запис" appearance="primary" />
            <Button
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/orders`}
              label="Переглянути всі замовлення"
              appearance="secondary"
            />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h1>Дякуємо за ваше замовлення!</h1>
          <p>
            {`Ваше замовлення підтверджено. Незабаром ви отримаєте підтвердження електронною поштою. Ідентифікатор вашого замовлення ${orderID}.`}
          </p>
          <div className={classes.actions}>
            <Button href={`/account/orders/${orderID}`} label="Переглянути замовлення" appearance="primary" />
            <Button
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/account/orders`}
              label="Переглянути всі замовлення"
              appearance="secondary"
            />
          </div>
        </Fragment>
      )}
    </div>
  )
}