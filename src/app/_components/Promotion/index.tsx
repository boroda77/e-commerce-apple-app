'use client'
import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 3)

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date()
      const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

      setTime({ days, hours, minutes, seconds })

      if (timeDifference === 0) {
        clearInterval(timerInterval)
        // Ви можете додати сюди код, щоб керувати тим, що відбувається після досягнення цільової дати.
      }
    }, 1000)

    return () => {
      clearInterval(timerInterval) // Очищення інтервалу, коли компонент демонтується.
    }
  }, [])

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Угоди місяця</h3>
        <p>
          Будьте готові до шопінгу, як ніколи раніше, завдяки нашим пропозиціям місяця! Кожна
          покупка супроводжується ексклюзивними бонусами та пропозиціями, що робить цей місяць святом кмітливості
          вибору і чудових пропозицій. Не пропустіть! 🎁🛒
        </p>

        <ul className={classes.stats}>
          <StatBox label="Дні" value={time.days} />
          <StatBox label="Години" value={time.hours} />
          <StatBox label="Хвилини" value={time.minutes} />
          <StatBox label="Секунди" value={time.seconds} />
        </ul>
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

export default Promotion