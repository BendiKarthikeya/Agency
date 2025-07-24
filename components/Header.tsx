'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const pathname = usePathname()
  const [logoError, setLogoError] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {!logoError ? (
            <Image 
              src="/logo-2.jpg" 
              alt="Go Automate" 
              width={200} 
              height={40}
              className={styles.logoImage}
              priority
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className={styles.logoText}>Go Automate</span>
          )}
        </Link>
        <nav className={styles.nav}>
          <Link 
            href="/" 
            className={pathname === '/' ? styles.active : ''}
          >
            Home
          </Link>
          <Link 
            href="/use-cases" 
            className={pathname === '/use-cases' ? styles.active : ''}
          >
            Use Cases
          </Link>
          <Link 
            href="/about" 
            className={pathname === '/about' ? styles.active : ''}
          >
            About Us
          </Link>
        </nav>
      </div>
    </header>
  )
}