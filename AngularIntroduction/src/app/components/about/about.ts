import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit, AfterViewInit, OnDestroy {
scrollToHistory() {
throw new Error('Method not implemented.');
}
  introText = [
  `PT. Iron Asia Global adalah perusahaan modern yang bergerak di bidang building & material supply, berfokus pada penyediaan solusi digital untuk industri konstruksi. Kami hadir untuk mempermudah kontraktor, toko material, dan individu dalam mendapatkan material berkualitas, mulai dari baja, besi, semen, hingga kebutuhan konstruksi lainnya. Platform kami mengintegrasikan supplier dan customer dalam satu ekosistem digital terpadu melalui website dan aplikasi mobile, sehingga proses pembelian, pemesanan, dan distribusi material menjadi lebih cepat, transparan, dan efisien.`,
];

  history = [
    { 
      year: '2020', 
      title: 'The Idea', 
      desc: 'Lahir dari ide untuk menyatukan supplier dan customer material bangunan.' 
    },
    { 
      year: '2021-2024', 
      title: 'Development', 
      desc: 'Membangun website & aplikasi mobile, melakukan uji coba.' 
    },
    { 
      year: '2025', 
      title: 'Official Launch', 
      desc: 'Tonggak resmi peluncuran platform Iron Asia dengan jaringan distribusi nasional.' 
    },
  ];

  values = [
    { 
      title: 'Integrity', 
      desc: 'Menjaga kepercayaan dengan sikap jujur dan transparan.' 
    },
    { 
      title: 'Efficiency', 
      desc: 'Proses pemenuhan kebutuhan material lebih cepat dan praktis.' 
    },
    { 
      title: 'Innovation', 
      desc: 'Solusi digital yang relevan bagi dunia konstruksi.' 
    },
    { 
      title: 'Collaboration', 
      desc: 'Menghubungkan supplier, kontraktor, dan customer.' 
    },
    { 
      title: 'Sustainability', 
      desc: 'Mendukung pembangunan berkelanjutan dengan material berkualitas.' 
    }
  ];

  whyChooseUs = [
    '30+ Produk Material tersedia (baja ringan, besi, semen, dll).',
    '50+ Supplier Lokal terpercaya, mayoritas di Tangerang dan sekitarnya.',
    '500+ Customer Aktif (toko material, kontraktor, individu).',
    'Akses Online 24/7 lewat website & aplikasi mobile.',
    'Proses pembelian 40% lebih efisien dibanding cara konvensional.'
  ];

  vision = 'Menjadi platform e-commerce material bangunan terbesar di Indonesia dengan menghubungkan seluruh ekosistem industri konstruksi dalam satu wadah digital.';
  
  mission = [
    'Memberikan akses mudah terhadap produk material bangunan.',
    'Menciptakan transparansi harga & kualitas antara supplier dan customer.',
    'Membantu kontraktor, toko bangunan, dan industri mendapatkan material tepat waktu.',
    'Mendorong digitalisasi industri konstruksi Indonesia.',
    'Menjadi platform hybrid (B2B & B2C) untuk bisnis besar & individu.'
  ];

  businessScope = [
    'E-Commerce Material Bangunan (website & aplikasi mobile).',
    'B2B: mendukung kontraktor, developer, industri dalam pengadaan skala besar.',
    'B2C: memudahkan individu memenuhi kebutuhan rumah/renovasi.',
    'Distribusi & Logistik Lokal untuk pengiriman material.'
  ];

   // Statistics data
  stats = [
    { number: '10,000+', label: 'Produk Tersedia', icon: '📦' },
    { number: '5,000+', label: 'Pelanggan Puas', icon: '😊' },
    { number: '50+', label: 'Kota Terjangkau', icon: '🏙️' },
    { number: '24/7', label: 'Customer Support', icon: '📞' }
  ];

  // Animation observer
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  // Get icon for values based on index
  getValueIcon(index: number): string {
    const icons = [
      'fas fa-handshake',     // Integrity
      'fas fa-tachometer-alt', // Efficiency  
      'fas fa-lightbulb',     // Innovation
      'fas fa-users',         // Collaboration
      'fas fa-leaf'           // Sustainability
    ];
    return icons[index] || 'fas fa-star';
  }

  // Get icon for business scope based on index
  getScopeIcon(index: number): string {
    const icons = [
      'fas fa-laptop',        // E-Commerce
      'fas fa-building',      // B2B
      'fas fa-home',          // B2C
      'fas fa-truck'          // Logistics
    ];
    return icons[index] || 'fas fa-cube';
  }

  // Handle register button click
  onRegisterClick(): void {
    // Implement registration logic here
    console.log('Register button clicked');
    // Example: redirect to registration page
    // this.router.navigate(['/register']);
  }

  // Initialize scroll animations
  private initScrollAnimations(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add staggered delay for multiple elements in the same section
          const parent = entry.target.parentElement;
          if (parent) {
            const siblings = Array.from(parent.children);
            const index = siblings.indexOf(entry.target as Element);
            
            if (index >= 0) {
              (entry.target as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
            }
          }
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
      '.fade-in, .slide-left, .slide-right, .bounce-in'
    );
    
    animatedElements.forEach(el => {
      this.observer?.observe(el);
    });

    // Add additional scroll effects for enhanced experience
    this.addScrollEffects();
  }

  // Add enhanced scroll effects
  private addScrollEffects(): void {
    let ticking = false;

    const updateAnimations = () => {
      const scrollY = window.scrollY;
      
      // Parallax effect for background elements
      const parallaxElements = document.querySelectorAll('.intro-section::before, .values-section::before');
      parallaxElements.forEach((element: any) => {
        if (element && element.style) {
          element.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
      });

      // Update progress indicators or other scroll-dependent elements
      this.updateScrollProgress(scrollY);
      
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
      }
    });
  }

  // Update scroll progress (can be used for progress bars, etc.)
  private updateScrollProgress(scrollY: number): void {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollProgress = (scrollY / documentHeight) * 100;
    
    // You can use this progress value for progress indicators
    // Example: document.documentElement.style.setProperty('--scroll-progress', `${scrollProgress}%`);
  }

  // Utility method to handle smooth scrolling to sections
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }

  // Method to handle dynamic content loading if needed
  loadMoreContent(): void {
    // Implement lazy loading or dynamic content loading
    console.log('Loading more content...');
  }

  // Method to handle responsive behavior
  private handleResponsive(): void {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      // Apply mobile-specific behaviors
      document.body.classList.add('mobile-view');
    } else {
      document.body.classList.remove('mobile-view');
    }
  }
}

