import './style.css'

const qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=00020126580014BR.GOV.BCB.PIX0136123e4567-e89b-12d3-a456-4266554400005204000053039865802BR5913Teste%20Doacao6008BRASILIA62070503***6304E2CA'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="header">
      <h1>Ajude a Valentina</h1>
      <p class="subtitle">Juntos podemos fazer a diferença na vida desta pequena guerreira</p>
    </div>

    <div class="profile-section">
      <img src="valentina.jpg" alt="Foto da Valentina" class="profile-image">
      <p class="urgent-message">
        Não ignore nosso pedido de ajuda.<br>
        A Valentina precisa de você para continuar sua luta!
      </p>
    </div>

    <div class="story-section">
      <h2>Conheça a História da Valentina</h2>
      <p>
        Valentina tem apenas 9 anos e está enfrentando uma batalha contra o câncer com muita coragem.
        Ela precisa de tratamento contínuo e medicamentos especializados para continuar sua luta pela vida.
      </p>
      <p>
        <span class="highlight">Cada doação, independente do valor, faz uma enorme diferença</span> para
        garantir que ela receba todo o tratamento necessário.
      </p>
    </div>

    <div class="donation-section">
      <h2>Como Ajudar</h2>
      <p>
        Você pode contribuir facilmente através do PIX usando o QR Code abaixo:
      </p>
      
      <div class="qr-code-container">
        <img src="${qrCodeUrl}" alt="QR Code PIX para doação" class="qr-code">
      </div>

      <div class="donation-info">
        <p><strong>Chave PIX:</strong> [Inserir chave PIX]</p>
        <p><strong>Nome:</strong> [Nome do Responsável]</p>
        <p><strong>Banco:</strong> [Nome do Banco]</p>
      </div>
      
      <p class="thank-you">
        Agradecemos imensamente sua generosidade!<br>
        Cada contribuição nos aproxima mais da cura da Valentina.
      </p>
    </div>

    <div class="contact">
      <p>Para mais informações ou outras formas de ajudar:</p>
      <p>📱 Telefone: (XX) XXXXX-XXXX</p>
      <p>✉️ Email: contato@exemplo.com</p>
    </div>
  </div>
`