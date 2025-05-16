 
        function opensite() {
            window.open('https://www.baidu.com, '_blank');
        }
        
        // パーティクル効果を追加
        document.addEventListener('DOMContentLoaded', function() {
            const particlesContainer = document.getElementById('particles');
            const headerHeight = document.querySelector('.invest-header').offsetHeight;
            const headerWidth = document.querySelector('.invest-header').offsetWidth;
            
            // パーティクルの追加
            const particles = 15;
            const shapes = ['circle', 'triangle', 'square'];
            const colors = ['#b75de6', '#f7d161', '#00af57', '#3498db'];
            
            for (let i = 0; i < particles; i++) {
                const particle = document.createElement('span');
                particle.classList.add('invest-particle');
                
                // ランダムな大きさ（3px - 8px）
                const size = 3 + Math.random() * 5;
                
                // ランダムな位置
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                
                // ランダムな形
                const shape = shapes[Math.floor(Math.random() * shapes.length)];
                
                // ランダムな色
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                // ランダムなアニメーション遅延
                const delay = Math.random() * 5;
                
                // ランダムなアニメーション時間
                const duration = 5 + Math.random() * 10;
                
                particle.style.top = `${posY}%`;
                particle.style.left = `${posX}%`;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.backgroundColor = color;
                particle.style.animationDelay = `${delay}s`;
                particle.style.animationDuration = `${duration}s`;
                
                // 形の設定
                if (shape === 'circle') {
                    particle.style.borderRadius = '50%';
                } else if (shape === 'triangle') {
                    particle.style.width = '0';
                    particle.style.height = '0';
                    particle.style.borderLeft = `${size/2}px solid transparent`;
                    particle.style.borderRight = `${size/2}px solid transparent`;
                    particle.style.borderBottom = `${size}px solid ${color}`;
                    particle.style.backgroundColor = 'transparent';
                }
                
                particlesContainer.appendChild(particle);
            }
        }); 