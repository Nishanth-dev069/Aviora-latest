export default function MapEmbed({ className }: { className: string }) {
  return (
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121820.69708945802!2d78.38466185!3d17.41215315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
      className={className} 
      loading="lazy"
      title="Aviora Aviation Academy Google Maps Location"
    ></iframe>
  );
}
