using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.ObjetoDeValor;

namespace QuickBuy.Repositorio.Config
{
    public class FormaPagamentoConfiguration : IEntityTypeConfiguration<FormaPagamento>
    {
        public void Configure(EntityTypeBuilder<FormaPagamento> builder)
        {
            builder.HasKey(f => f.Id);

            //Builder utiliza o padrão Fluent
            builder
                .Property(f => f.Nome)
                .HasMaxLength(50)
                .IsRequired();

            builder
                .Property(f => f.Descricao)
                .HasMaxLength(100)
                .IsRequired();
        }
    }
}
