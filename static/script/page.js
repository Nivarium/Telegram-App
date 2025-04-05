document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const contentBlocks = document.querySelectorAll('.content');
    const loadingOverlay = document.querySelector('.loading-overlay');

    const showPage = (pageId) => {
        contentBlocks.forEach(block => {
            if (block.classList.contains('active')) {
                block.style.opacity = '0'; 
                setTimeout(() => {
                    block.classList.remove('active'); 
                    block.style.display = 'none'; 
                }, 100); 
            }
        });

        const targetBlock = document.getElementById(pageId);
        setTimeout(() => {
            targetBlock.style.display = 'flex'; 
            setTimeout(() => {
                targetBlock.style.opacity = '1'; 
                targetBlock.classList.add('active');
            }, 10); 
        }, 200); 
    };

    const showLoading = () => {
        loadingOverlay.style.display = 'flex'; 
        setTimeout(() => {
            loadingOverlay.style.opacity = '1'; 
        }, 10);
    };

    const hideLoading = () => {
        loadingOverlay.style.opacity = '0'; 
        setTimeout(() => {
            loadingOverlay.style.display = 'none'; 
        }, 200); 
    };

    showPage('miner');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = e.currentTarget.getAttribute('data-target');
            
            showLoading();
            setTimeout(() => {
                hideLoading();
                showPage(targetPage);
            }, 300); 
        });
    });
});

