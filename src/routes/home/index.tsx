import React from 'react'
import './style.css';

export default function Home() {
  return (
    <div className={'main'}>
      <header className={'main__header'}>
        Cloud Manager
      </header>
      <main className={'main__content'}>
        <div className={'main__content__name'}>
          Cloud Manager
        </div>
        <div className={'main__content__list'}>
          <div>Free</div>
          <div>Fast</div>
          <div>Fantastic</div>
        </div>
      </main>
      <footer className={'main__footer'}>
        <div>
          Author: Dmitriy Lebedev <br/>
          Email: gemsioxabusiness@gmail.com
        </div>
        <div>
          {/* Cloud Manager Inc. */}
        </div>
      </footer>
    </div>
  )
}
