import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-muted-foreground">
          Meet me at{' '}
          <Link 
            href="https://vybelabs.tech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            Vybe Lab
          </Link>
        </p>
      </div>
    </footer>
  )
}

