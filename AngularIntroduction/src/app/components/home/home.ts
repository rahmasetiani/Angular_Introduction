import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {
  title = 'Selamat Datang di IronAsia';
  description = 'Temukan produk terbaik untuk kebutuhan konstruksi dan industri Anda';

  // Banner data
  banners = [
    { 
      image: '1.jpeg', 
      // title: 'Produk Berkualitas Premium', 
      // description: 'Material konstruksi terbaik dengan standar internasional untuk proyek Anda.', 
      // buttonText: 'Belanja Sekarang' 
    },
    { 
      image: '2.jpeg', 
      // title: 'Harga Kompetitif & Terjangkau', 
      // description: 'Dapatkan penawaran terbaik dan promo menarik khusus untuk pelanggan setia.', 
      // buttonText: 'Lihat Promo' 
    },
    { 
      image: '3.jpeg', 
      // title: 'Pengiriman Cepat & Terpercaya', 
      // description: 'Layanan pengiriman ke seluruh Indonesia dengan garansi tepat waktu.', 
      // buttonText: 'Pesan Sekarang' 
    },
    {
      image: '4.jpeg', 
    },
    {
      image: '5.jpeg', 
    },
    {
      image: '6.jpeg',
    },
    {
      image: '7.jpeg',
    },
    {
      Image: '8.jpeg',
    }
  ];

  // Category data
  categories = [
    { 
      name: 'Steel Products', 
      image: '/assets/images/steel-category.jpg', 
      subcategories: ['Steel Pipe', 'Steel Plate', 'Steel Coil', 'Long Products'],
      icon: '🏗️'
    },
    { 
      name: 'Cement & Concrete', 
      image: '/assets/images/cement-category.jpg', 
      subcategories: ['Portland Cement', 'White Cement', 'Ready Mix', 'Mortar'],
      icon: '🧱'
    },
    { 
      name: 'Paint & Coating', 
      image: '/assets/images/paint-category.jpg', 
      subcategories: ['Interior Paint', 'Exterior Paint', 'Industrial Coating', 'Primer'],
      icon: '🎨'
    },
    { 
      name: 'Hardware & Tools', 
      image: '/assets/images/tools-category.jpg', 
      subcategories: ['Construction Tools', 'Safety Equipment', 'Fasteners', 'Measuring Tools'],
      icon: '🔧'
    }
  ];

  // Featured products data
  products = [
    { 
      name: 'Pipa Baja Galvanis', 
      price: 285000, 
      image: '/assets/images/steel-pipe.jpg',
      originalPrice: 320000,
      discount: 11,
      rating: 4.8,
      inStock: true
    },
    { 
      name: 'Semen Portland Type I', 
      price: 68000, 
      image: '/assets/images/portland-cement.jpg',
      originalPrice: 75000,
      discount: 9,
      rating: 4.9,
      inStock: true
    },
    { 
      name: 'Cat Tembok Premium', 
      price: 145000, 
      image: '/assets/images/wall-paint.jpg',
      originalPrice: 165000,
      discount: 12,
      rating: 4.7,
      inStock: true
    },
    { 
      name: 'Besi Beton SNI', 
      price: 12500, 
      image: '/assets/images/rebar.jpg',
      originalPrice: 14000,
      discount: 11,
      rating: 4.6,
      inStock: false
    },
    { 
      name: 'Cat Anti Karat', 
      price: 89000, 
      image: '/assets/images/anti-rust-paint.jpg',
      originalPrice: 98000,
      discount: 9,
      rating: 4.8,
      inStock: true
    },
    { 
      name: 'Semen Instan', 
      price: 35000, 
      image: '/assets/images/instant-cement.jpg',
      originalPrice: 42000,
      discount: 17,
      rating: 4.5,
      inStock: true
    }
  ];

  // Banner slider state
  currentSlide = 0;
  slideInterval: any;

  // Statistics data
  stats = [
    { number: '10,000+', label: 'Produk Tersedia', icon: '📦' },
    { number: '5,000+', label: 'Pelanggan Puas', icon: '😊' },
    { number: '50+', label: 'Kota Terjangkau', icon: '🏙️' },
    { number: '24/7', label: 'Customer Support', icon: '📞' }
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Changed to 5 seconds for better UX
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.banners.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.banners.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    // Reset auto-slide timer when user manually navigates
    clearInterval(this.slideInterval);
    setTimeout(() => this.startAutoSlide(), 1000);
  }

  addToCart(product: any) {
    if (!product.inStock) {
      alert('Produk sedang tidak tersedia');
      return;
    }
    console.log('Added to cart:', product);
    // Add your cart logic here
    alert(`${product.name} berhasil ditambahkan ke keranjang!`);
  }

  viewCategory(category: any) {
    console.log('View category:', category);
    // Add navigation logic here
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('id-ID').format(price);
  }

  generateStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }
    
    if (hasHalfStar) {
      stars.push('☆');
    }
    
    while (stars.length < 5) {
      stars.push('☆');
    }
    
    return stars;
  }
}