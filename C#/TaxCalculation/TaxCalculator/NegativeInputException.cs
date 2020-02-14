using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaxCalculator
{
    public class NegativeInputException : Exception
    {
        public NegativeInputException(string message)
            : base(message)
        {
        }
    }

    public class InvalidInputException : Exception
    {
        public InvalidInputException(string message)
            : base(message)
        {
        }

    }
    public class DeductionLargerthanIncomeException : Exception
    {
        public DeductionLargerthanIncomeException(string message)
            : base(message)
        {
        }

    }
    
}
