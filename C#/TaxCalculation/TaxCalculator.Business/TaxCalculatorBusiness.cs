using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxCalculator.Infra;

namespace TaxCalculator.Business
{
    public class TaxCalculatorBusiness: TaxCalculationInterface
    {
        private double grossIncome;
        private double deduction;
        private double taxableIncome;
        private double[] taxSlab= {0,0,0};

        // Declare a grossIncome property of type double:
        public double GrossIncome
        {
            get
            {
                return grossIncome;
            }
            set
            {
                grossIncome = value;
            }
        }
        // Declare a Deduction property of type double:
        public double Deduction
        {
            get
            {
                return deduction;
            }
            set
            {
                deduction = value;
            }
        }

        public double TaxPayable(out double[] array) // Calculates the tax payable on the basis of taxable salary
        {
            double tax = 0;
            
            if (250000 < taxableIncome && taxableIncome <= 500000)
            {
                taxSlab[0] = 0.05 * (taxableIncome-250000);
            }
            else if (500000 < taxableIncome && taxableIncome <= 1000000)
            {
                taxSlab[0] = 12500;
                taxSlab[1] = 0.2 * (taxableIncome - 500000);

            }
            else if(taxableIncome>1000000)
            {
                taxSlab[0] = 12500;
                taxSlab[1] = 100000;
                taxSlab[2] = 0.3 * (taxableIncome - 1000000);
            }
            tax = taxSlab.Sum();
            array = taxSlab; 
            return tax; // return the calculated total tax
        }

        public double TaxableIncome() // calculates the taxable income
        {
            if (deduction < 150000)
            {
                taxableIncome = grossIncome - deduction;
            }
            else
            {
                taxableIncome = grossIncome - 150000;
            }

            return taxableIncome;// returns the Taxable Income
        }
    }
}
