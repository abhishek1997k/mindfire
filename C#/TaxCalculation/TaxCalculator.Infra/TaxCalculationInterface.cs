using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaxCalculator.Infra
{
    public interface TaxCalculationInterface//Interface for the business logic class
    {
         double TaxableIncome();
         double TaxPayable(out double[] array );

    }
}
