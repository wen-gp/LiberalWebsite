class BannerCarouselChart {
    #isEnableReorderBanner = true;
    reorderBanner(isMoveToLeft) {
        if (!this.#isEnableReorderBanner) {
            return;
        }
        this.#isEnableReorderBanner = false;
        let bannerListContainer = document.getElementById("wy-banner-carousel-chart__banner-list-container");
        let bannerContainers = Array.from(bannerListContainer.children);
        if (isMoveToLeft) {
            let firstBannerContainer = bannerContainers[0];
            for (let i = 1; i < bannerContainers.length; i++) {
                bannerContainers[i - 1] = bannerContainers[i];
            }
            bannerContainers[bannerContainers.length - 1] = firstBannerContainer;
        } else {
            let lastBannerContainer = bannerContainers[bannerContainers.length - 1];
            for (let i = bannerContainers.length - 2; i >= 0; i--) {
                bannerContainers[i + 1] = bannerContainers[i];
            }
            bannerContainers[0] = lastBannerContainer;
        }
        this.makeOptionActive(bannerContainers);
        if (isMoveToLeft) {
            bannerListContainer.classList.add("wy-banner-carousel-chart__banner-list-container-move");
            bannerListContainer.style.transform = "translateX(-40%)";
        }
        else {
            bannerListContainer.classList.add("wy-banner-carousel-chart__banner-list-container-move");
            bannerListContainer.style.transform = "translateX(0%)";
        }
        setTimeout(() => {
            bannerListContainer.classList.remove("wy-banner-carousel-chart__banner-list-container-move");
            bannerListContainer.style.transform = "translateX(-20%)";
            while (bannerListContainer.firstChild) {
                bannerListContainer.removeChild(bannerListContainer.firstChild);
            }
            bannerContainers.forEach(element => {
                bannerListContainer.appendChild(element);
            });
        }, 500);
        this.#isEnableReorderBanner = true;
    }
    autoReorderBanner() {
        setInterval(() => {
            if (!this.#isEnableReorderBanner) {
                return;
            }
            this.reorderBanner(true);
        }, 5500);
    }
    makeOptionActive(bannerContainers) {
        let originalIndex = bannerContainers[1].dataset.originalIndex;
        let options = document.querySelectorAll(".wy-banner-carousel-chart__banner-option");
        for (let i = 0; i < options.length; i++) {
            let element = options[i];
            if (element.dataset.optionIndex == originalIndex) {
                element.style.borderBottom = "10px solid red";
            }
            else {
                element.style.borderBottom = "none";
            }
        }
    }
    setActiveBanner(optionIndex) {
        let options = document.querySelectorAll(".wy-banner-carousel-chart__banner-option");
        for (let i = 0; i < options.length; i++) {
            let element = options[i];
            if (element.dataset.optionIndex == optionIndex) {
                element.style.borderBottom = "10px solid red";
            }
            else {
                element.style.borderBottom = "none";
            }
        }
        let bannerListContainer = document.getElementById("wy-banner-carousel-chart__banner-list-container");
        let bannerContainers = Array.from(bannerListContainer.children);
        for (let j = 0; j < bannerContainers.length; j++) {
            let originalIndex = bannerContainers[j].dataset.originalIndex;//找到和选项索引一致的banner图
            if (originalIndex == optionIndex) {
                while (bannerContainers[1].dataset.originalIndex != optionIndex) {
                    let firstBanner = bannerContainers.shift();
                    bannerContainers.push(firstBanner);
                }
                bannerListContainer.style.transform = "translateX(-20%)";
                while (bannerListContainer.firstChild) {
                    bannerListContainer.removeChild(bannerListContainer.firstChild);
                }
                bannerContainers.forEach(element => {
                    bannerListContainer.appendChild(element);
                });
            }
        }
    }
}