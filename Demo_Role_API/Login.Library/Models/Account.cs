using System;
using System.Collections.Generic;

namespace Login.Library.Models
{
    public partial class Account
    {
        public string Username { get; set; } = null!;
        public string Pwd { get; set; } = null!;
        public string Role { get; set; } = null!;
    }
}
