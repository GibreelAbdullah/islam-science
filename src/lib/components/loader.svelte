<div class="loader">
    <div class="react-star">
      <div class="nucleus"></div>
      <div class="electron electron1"></div>
      <div class="electron electron2"></div>
      <div class="electron electron3"></div>
    </div>
  </div>
  <style>
   
  .loader {
    height: 4rem;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .react-star {
    position: relative;
    width: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.6rem;
    animation: rotate 3s infinite;
  }
  
  .nucleus {
    position: absolute;
  
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: linear-gradient(#0738e8, rgb(255, 60, 0));
    height: 1rem;
    width: 1rem;
    animation: rotate 1s linear infinite;
  }
  
  .electron {
    position: absolute;
    width: 3rem;
    height: 6rem;
    border-radius: 50%;
    border: 0.3rem solid #4c00ff;
    animation: revolve 1s linear infinite;
  }
  
  .electron1::before,
  .electron2::before,
  .electron3::before {
    content: "";
    position: absolute;
    top: 60%;
    left: 100%;
    transform: translate(-50%, -50%);
    width: 1rem;
    height: 1rem;
    background-color: #9b7bd8;
    border-radius: 50%;
    animation: moveElectron 1s infinite;
  }
  .electron2 {
    transform: rotate(60deg);
    animation-delay: -0.66s;
  }
  .electron2::before {
    animation-delay: -0.66s;
  }
  
  .electron3 {
    transform: rotate(-60deg);
  }
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg) scale3d(1.1, 1.1, 0);
    }
  }
  
  @keyframes revolve {
    0% {
      border-color: #d87b7b;
      border-right: transparent;
    }
    25% {
      border-color: #d87b7b;
      border-bottom-color: transparent;
    }
    50% {
      border-color: #d87b7b;
      border-left-color: transparent;
    }
    75% {
      border-color: #d87b7b;
      border-top-color: transparent;
    }
    100% {
      border-color: #d87b7b;
      border-right-color: transparent;
    }
  }
  
  @keyframes moveElectron {
    0% {
      top: 60%;
      left: 100%;
    }
    25% {
      top: 100%;
      left: 60%;
    }
    50% {
      top: 60%;
      left: 0%;
    }
    75% {
      top: 0%;
      left: 60%;
    }
    100% {
      top: 60%;
      left: 100%;
    }
  }
  
  </style>